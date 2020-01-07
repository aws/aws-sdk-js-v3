import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIPSetCommandInput = DeleteIPSetRequest;
export declare type DeleteIPSetCommandOutput = DeleteIPSetResponse & __MetadataBearer;
export declare class DeleteIPSetCommand extends $Command<DeleteIPSetCommandInput, DeleteIPSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteIPSetCommandInput;
    constructor(input: DeleteIPSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIPSetCommandInput, DeleteIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
