import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSecurityGroupRequest, CreateSecurityGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSecurityGroupCommandInput = CreateSecurityGroupRequest;
export declare type CreateSecurityGroupCommandOutput = CreateSecurityGroupResult & __MetadataBearer;
export declare class CreateSecurityGroupCommand extends $Command<CreateSecurityGroupCommandInput, CreateSecurityGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSecurityGroupCommandInput;
    constructor(input: CreateSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSecurityGroupCommandInput, CreateSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
