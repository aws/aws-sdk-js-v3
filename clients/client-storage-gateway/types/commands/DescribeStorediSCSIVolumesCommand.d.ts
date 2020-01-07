import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStorediSCSIVolumesCommandInput = DescribeStorediSCSIVolumesInput;
export declare type DescribeStorediSCSIVolumesCommandOutput = DescribeStorediSCSIVolumesOutput & __MetadataBearer;
export declare class DescribeStorediSCSIVolumesCommand extends $Command<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeStorediSCSIVolumesCommandInput;
    constructor(input: DescribeStorediSCSIVolumesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
