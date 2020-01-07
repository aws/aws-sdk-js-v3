import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CheckCapacityRequest, CheckCapacityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CheckCapacityCommandInput = CheckCapacityRequest;
export declare type CheckCapacityCommandOutput = CheckCapacityResponse & __MetadataBearer;
export declare class CheckCapacityCommand extends $Command<CheckCapacityCommandInput, CheckCapacityCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: CheckCapacityCommandInput;
    constructor(input: CheckCapacityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckCapacityCommandInput, CheckCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
