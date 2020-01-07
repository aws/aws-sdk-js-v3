import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVolumeRequest, Volume } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVolumeCommandInput = CreateVolumeRequest;
export declare type CreateVolumeCommandOutput = Volume & __MetadataBearer;
export declare class CreateVolumeCommand extends $Command<CreateVolumeCommandInput, CreateVolumeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVolumeCommandInput;
    constructor(input: CreateVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVolumeCommandInput, CreateVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
