import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteXssMatchSetRequest, DeleteXssMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteXssMatchSetCommandInput = DeleteXssMatchSetRequest;
export declare type DeleteXssMatchSetCommandOutput = DeleteXssMatchSetResponse & __MetadataBearer;
export declare class DeleteXssMatchSetCommand extends $Command<DeleteXssMatchSetCommandInput, DeleteXssMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeleteXssMatchSetCommandInput;
    constructor(input: DeleteXssMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteXssMatchSetCommandInput, DeleteXssMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
