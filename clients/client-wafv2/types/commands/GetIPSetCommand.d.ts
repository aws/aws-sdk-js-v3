import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetIPSetRequest, GetIPSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIPSetCommandInput = GetIPSetRequest;
export declare type GetIPSetCommandOutput = GetIPSetResponse & __MetadataBearer;
export declare class GetIPSetCommand extends $Command<GetIPSetCommandInput, GetIPSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetIPSetCommandInput;
    constructor(input: GetIPSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIPSetCommandInput, GetIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
