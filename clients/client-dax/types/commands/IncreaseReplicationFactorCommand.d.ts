import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { IncreaseReplicationFactorRequest, IncreaseReplicationFactorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IncreaseReplicationFactorCommandInput = IncreaseReplicationFactorRequest;
export declare type IncreaseReplicationFactorCommandOutput = IncreaseReplicationFactorResponse & __MetadataBearer;
export declare class IncreaseReplicationFactorCommand extends $Command<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput, DAXClientResolvedConfig> {
    readonly input: IncreaseReplicationFactorCommandInput;
    constructor(input: IncreaseReplicationFactorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput>;
    private serialize;
    private deserialize;
}
