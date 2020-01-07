import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateRegexMatchSetRequest, UpdateRegexMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRegexMatchSetCommandInput = UpdateRegexMatchSetRequest;
export declare type UpdateRegexMatchSetCommandOutput = UpdateRegexMatchSetResponse & __MetadataBearer;
export declare class UpdateRegexMatchSetCommand extends $Command<UpdateRegexMatchSetCommandInput, UpdateRegexMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateRegexMatchSetCommandInput;
    constructor(input: UpdateRegexMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRegexMatchSetCommandInput, UpdateRegexMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
