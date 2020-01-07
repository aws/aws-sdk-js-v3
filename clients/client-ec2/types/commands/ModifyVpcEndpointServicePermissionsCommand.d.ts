import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointServicePermissionsRequest, ModifyVpcEndpointServicePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcEndpointServicePermissionsCommandInput = ModifyVpcEndpointServicePermissionsRequest;
export declare type ModifyVpcEndpointServicePermissionsCommandOutput = ModifyVpcEndpointServicePermissionsResult & __MetadataBearer;
export declare class ModifyVpcEndpointServicePermissionsCommand extends $Command<ModifyVpcEndpointServicePermissionsCommandInput, ModifyVpcEndpointServicePermissionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcEndpointServicePermissionsCommandInput;
    constructor(input: ModifyVpcEndpointServicePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcEndpointServicePermissionsCommandInput, ModifyVpcEndpointServicePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
