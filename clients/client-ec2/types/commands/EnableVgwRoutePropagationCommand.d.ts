import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVgwRoutePropagationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableVgwRoutePropagationCommandInput = EnableVgwRoutePropagationRequest;
export declare type EnableVgwRoutePropagationCommandOutput = __MetadataBearer;
export declare class EnableVgwRoutePropagationCommand extends $Command<EnableVgwRoutePropagationCommandInput, EnableVgwRoutePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableVgwRoutePropagationCommandInput;
    constructor(input: EnableVgwRoutePropagationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableVgwRoutePropagationCommandInput, EnableVgwRoutePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
