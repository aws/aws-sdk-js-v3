import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Locations } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocationsCommandInput = {};
export declare type DescribeLocationsCommandOutput = Locations & __MetadataBearer;
export declare class DescribeLocationsCommand extends $Command<DescribeLocationsCommandInput, DescribeLocationsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeLocationsCommandInput;
    constructor(input: DescribeLocationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationsCommandInput, DescribeLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
