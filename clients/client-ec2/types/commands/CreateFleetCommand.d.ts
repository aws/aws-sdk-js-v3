import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFleetRequest, CreateFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFleetCommandInput = CreateFleetRequest;
export declare type CreateFleetCommandOutput = CreateFleetResult & __MetadataBearer;
export declare class CreateFleetCommand extends $Command<CreateFleetCommandInput, CreateFleetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateFleetCommandInput;
    constructor(input: CreateFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFleetCommandInput, CreateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
