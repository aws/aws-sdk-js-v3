import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVolumeIORequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableVolumeIOCommandInput = EnableVolumeIORequest;
export declare type EnableVolumeIOCommandOutput = __MetadataBearer;
export declare class EnableVolumeIOCommand extends $Command<EnableVolumeIOCommandInput, EnableVolumeIOCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableVolumeIOCommandInput;
    constructor(input: EnableVolumeIOCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableVolumeIOCommandInput, EnableVolumeIOCommandOutput>;
    private serialize;
    private deserialize;
}
