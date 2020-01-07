import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CustomAvailabilityZoneMessage, DescribeCustomAvailabilityZonesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCustomAvailabilityZonesCommandInput = DescribeCustomAvailabilityZonesMessage;
export declare type DescribeCustomAvailabilityZonesCommandOutput = CustomAvailabilityZoneMessage & __MetadataBearer;
export declare class DescribeCustomAvailabilityZonesCommand extends $Command<DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeCustomAvailabilityZonesCommandInput;
    constructor(input: DescribeCustomAvailabilityZonesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput>;
    private serialize;
    private deserialize;
}
