import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { UpdateRegexMatchSetRequest, UpdateRegexMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRegexMatchSetCommandInput = UpdateRegexMatchSetRequest;
export declare type UpdateRegexMatchSetCommandOutput = UpdateRegexMatchSetResponse & __MetadataBearer;
export declare class UpdateRegexMatchSetCommand extends $Command<UpdateRegexMatchSetCommandInput, UpdateRegexMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: UpdateRegexMatchSetCommandInput;
    constructor(input: UpdateRegexMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRegexMatchSetCommandInput, UpdateRegexMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
