import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointRequest, ModifyVpcEndpointResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcEndpointCommandInput = ModifyVpcEndpointRequest;
export declare type ModifyVpcEndpointCommandOutput = ModifyVpcEndpointResult & __MetadataBearer;
export declare class ModifyVpcEndpointCommand extends $Command<ModifyVpcEndpointCommandInput, ModifyVpcEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcEndpointCommandInput;
    constructor(input: ModifyVpcEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcEndpointCommandInput, ModifyVpcEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
