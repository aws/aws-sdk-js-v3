import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteRegexMatchSetRequest, DeleteRegexMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRegexMatchSetCommandInput = DeleteRegexMatchSetRequest;
export declare type DeleteRegexMatchSetCommandOutput = DeleteRegexMatchSetResponse & __MetadataBearer;
export declare class DeleteRegexMatchSetCommand extends $Command<DeleteRegexMatchSetCommandInput, DeleteRegexMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeleteRegexMatchSetCommandInput;
    constructor(input: DeleteRegexMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegexMatchSetCommandInput, DeleteRegexMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
