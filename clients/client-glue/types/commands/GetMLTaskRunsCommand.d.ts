import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTaskRunsRequest, GetMLTaskRunsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMLTaskRunsCommandInput = GetMLTaskRunsRequest;
export declare type GetMLTaskRunsCommandOutput = GetMLTaskRunsResponse & __MetadataBearer;
export declare class GetMLTaskRunsCommand extends $Command<GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMLTaskRunsCommandInput;
    constructor(input: GetMLTaskRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput>;
    private serialize;
    private deserialize;
}
