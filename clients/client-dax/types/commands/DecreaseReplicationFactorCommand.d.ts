import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DecreaseReplicationFactorCommandInput = DecreaseReplicationFactorRequest;
export declare type DecreaseReplicationFactorCommandOutput = DecreaseReplicationFactorResponse & __MetadataBearer;
export declare class DecreaseReplicationFactorCommand extends $Command<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput, DAXClientResolvedConfig> {
    readonly input: DecreaseReplicationFactorCommandInput;
    constructor(input: DecreaseReplicationFactorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput>;
    private serialize;
    private deserialize;
}
