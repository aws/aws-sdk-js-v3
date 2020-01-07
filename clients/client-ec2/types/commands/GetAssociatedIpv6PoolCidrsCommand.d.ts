import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetAssociatedIpv6PoolCidrsRequest, GetAssociatedIpv6PoolCidrsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAssociatedIpv6PoolCidrsCommandInput = GetAssociatedIpv6PoolCidrsRequest;
export declare type GetAssociatedIpv6PoolCidrsCommandOutput = GetAssociatedIpv6PoolCidrsResult & __MetadataBearer;
export declare class GetAssociatedIpv6PoolCidrsCommand extends $Command<GetAssociatedIpv6PoolCidrsCommandInput, GetAssociatedIpv6PoolCidrsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetAssociatedIpv6PoolCidrsCommandInput;
    constructor(input: GetAssociatedIpv6PoolCidrsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssociatedIpv6PoolCidrsCommandInput, GetAssociatedIpv6PoolCidrsCommandOutput>;
    private serialize;
    private deserialize;
}
