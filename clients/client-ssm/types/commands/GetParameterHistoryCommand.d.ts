import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParameterHistoryRequest, GetParameterHistoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetParameterHistoryCommandInput = GetParameterHistoryRequest;
export declare type GetParameterHistoryCommandOutput = GetParameterHistoryResult & __MetadataBearer;
export declare class GetParameterHistoryCommand extends $Command<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParameterHistoryCommandInput;
    constructor(input: GetParameterHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
