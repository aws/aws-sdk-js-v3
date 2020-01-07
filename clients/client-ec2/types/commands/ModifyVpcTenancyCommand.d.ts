import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcTenancyRequest, ModifyVpcTenancyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcTenancyCommandInput = ModifyVpcTenancyRequest;
export declare type ModifyVpcTenancyCommandOutput = ModifyVpcTenancyResult & __MetadataBearer;
export declare class ModifyVpcTenancyCommand extends $Command<ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcTenancyCommandInput;
    constructor(input: ModifyVpcTenancyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput>;
    private serialize;
    private deserialize;
}
