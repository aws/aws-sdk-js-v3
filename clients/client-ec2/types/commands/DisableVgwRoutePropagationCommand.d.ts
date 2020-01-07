import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableVgwRoutePropagationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableVgwRoutePropagationCommandInput = DisableVgwRoutePropagationRequest;
export declare type DisableVgwRoutePropagationCommandOutput = __MetadataBearer;
export declare class DisableVgwRoutePropagationCommand extends $Command<DisableVgwRoutePropagationCommandInput, DisableVgwRoutePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableVgwRoutePropagationCommandInput;
    constructor(input: DisableVgwRoutePropagationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableVgwRoutePropagationCommandInput, DisableVgwRoutePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
