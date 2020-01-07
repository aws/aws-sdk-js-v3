import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssignPrivateIpAddressesRequest, AssignPrivateIpAddressesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssignPrivateIpAddressesCommandInput = AssignPrivateIpAddressesRequest;
export declare type AssignPrivateIpAddressesCommandOutput = AssignPrivateIpAddressesResult & __MetadataBearer;
export declare class AssignPrivateIpAddressesCommand extends $Command<AssignPrivateIpAddressesCommandInput, AssignPrivateIpAddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssignPrivateIpAddressesCommandInput;
    constructor(input: AssignPrivateIpAddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignPrivateIpAddressesCommandInput, AssignPrivateIpAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
