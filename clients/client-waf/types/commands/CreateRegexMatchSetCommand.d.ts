import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateRegexMatchSetRequest, CreateRegexMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRegexMatchSetCommandInput = CreateRegexMatchSetRequest;
export declare type CreateRegexMatchSetCommandOutput = CreateRegexMatchSetResponse & __MetadataBearer;
export declare class CreateRegexMatchSetCommand extends $Command<CreateRegexMatchSetCommandInput, CreateRegexMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateRegexMatchSetCommandInput;
    constructor(input: CreateRegexMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRegexMatchSetCommandInput, CreateRegexMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
