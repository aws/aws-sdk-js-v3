import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountSummaryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountSummaryCommandInput = {};
export declare type GetAccountSummaryCommandOutput = GetAccountSummaryResponse & __MetadataBearer;
export declare class GetAccountSummaryCommand extends $Command<GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetAccountSummaryCommandInput;
    constructor(input: GetAccountSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
