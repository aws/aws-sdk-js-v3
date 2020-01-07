import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcPeeringConnectionOptionsRequest, ModifyVpcPeeringConnectionOptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcPeeringConnectionOptionsCommandInput = ModifyVpcPeeringConnectionOptionsRequest;
export declare type ModifyVpcPeeringConnectionOptionsCommandOutput = ModifyVpcPeeringConnectionOptionsResult & __MetadataBearer;
export declare class ModifyVpcPeeringConnectionOptionsCommand extends $Command<ModifyVpcPeeringConnectionOptionsCommandInput, ModifyVpcPeeringConnectionOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcPeeringConnectionOptionsCommandInput;
    constructor(input: ModifyVpcPeeringConnectionOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcPeeringConnectionOptionsCommandInput, ModifyVpcPeeringConnectionOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
