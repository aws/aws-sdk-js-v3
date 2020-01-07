import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssignIpv6AddressesRequest, AssignIpv6AddressesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssignIpv6AddressesCommandInput = AssignIpv6AddressesRequest;
export declare type AssignIpv6AddressesCommandOutput = AssignIpv6AddressesResult & __MetadataBearer;
export declare class AssignIpv6AddressesCommand extends $Command<AssignIpv6AddressesCommandInput, AssignIpv6AddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssignIpv6AddressesCommandInput;
    constructor(input: AssignIpv6AddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignIpv6AddressesCommandInput, AssignIpv6AddressesCommandOutput>;
    private serialize;
    private deserialize;
}
