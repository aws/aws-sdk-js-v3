import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetRegexMatchSetRequest, GetRegexMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRegexMatchSetCommandInput = GetRegexMatchSetRequest;
export declare type GetRegexMatchSetCommandOutput = GetRegexMatchSetResponse & __MetadataBearer;
export declare class GetRegexMatchSetCommand extends $Command<GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetRegexMatchSetCommandInput;
    constructor(input: GetRegexMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
