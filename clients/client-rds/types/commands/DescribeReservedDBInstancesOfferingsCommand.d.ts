import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeReservedDBInstancesOfferingsMessage, ReservedDBInstancesOfferingMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedDBInstancesOfferingsCommandInput = DescribeReservedDBInstancesOfferingsMessage;
export declare type DescribeReservedDBInstancesOfferingsCommandOutput = ReservedDBInstancesOfferingMessage & __MetadataBearer;
export declare class DescribeReservedDBInstancesOfferingsCommand extends $Command<DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeReservedDBInstancesOfferingsCommandInput;
    constructor(input: DescribeReservedDBInstancesOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
