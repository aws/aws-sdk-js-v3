import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorFilterNetworkServicesRequest, ModifyTrafficMirrorFilterNetworkServicesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyTrafficMirrorFilterNetworkServicesCommandInput = ModifyTrafficMirrorFilterNetworkServicesRequest;
export declare type ModifyTrafficMirrorFilterNetworkServicesCommandOutput = ModifyTrafficMirrorFilterNetworkServicesResult & __MetadataBearer;
export declare class ModifyTrafficMirrorFilterNetworkServicesCommand extends $Command<ModifyTrafficMirrorFilterNetworkServicesCommandInput, ModifyTrafficMirrorFilterNetworkServicesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTrafficMirrorFilterNetworkServicesCommandInput;
    constructor(input: ModifyTrafficMirrorFilterNetworkServicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTrafficMirrorFilterNetworkServicesCommandInput, ModifyTrafficMirrorFilterNetworkServicesCommandOutput>;
    private serialize;
    private deserialize;
}
