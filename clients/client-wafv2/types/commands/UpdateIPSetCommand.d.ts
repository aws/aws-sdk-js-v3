import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateIPSetCommandInput = UpdateIPSetRequest;
export declare type UpdateIPSetCommandOutput = UpdateIPSetResponse & __MetadataBearer;
export declare class UpdateIPSetCommand extends $Command<UpdateIPSetCommandInput, UpdateIPSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: UpdateIPSetCommandInput;
    constructor(input: UpdateIPSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
