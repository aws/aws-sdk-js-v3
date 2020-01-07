import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { RebootNodeRequest, RebootNodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootNodeCommandInput = RebootNodeRequest;
export declare type RebootNodeCommandOutput = RebootNodeResponse & __MetadataBearer;
export declare class RebootNodeCommand extends $Command<RebootNodeCommandInput, RebootNodeCommandOutput, DAXClientResolvedConfig> {
    readonly input: RebootNodeCommandInput;
    constructor(input: RebootNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootNodeCommandInput, RebootNodeCommandOutput>;
    private serialize;
    private deserialize;
}
