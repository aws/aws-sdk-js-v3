import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTaskRunRequest, GetMLTaskRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMLTaskRunCommandInput = GetMLTaskRunRequest;
export declare type GetMLTaskRunCommandOutput = GetMLTaskRunResponse & __MetadataBearer;
export declare class GetMLTaskRunCommand extends $Command<GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMLTaskRunCommandInput;
    constructor(input: GetMLTaskRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
