import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetOpsSummaryRequest, GetOpsSummaryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOpsSummaryCommandInput = GetOpsSummaryRequest;
export declare type GetOpsSummaryCommandOutput = GetOpsSummaryResult & __MetadataBearer;
export declare class GetOpsSummaryCommand extends $Command<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetOpsSummaryCommandInput;
    constructor(input: GetOpsSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
