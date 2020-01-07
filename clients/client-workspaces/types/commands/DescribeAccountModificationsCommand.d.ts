import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountModificationsCommandInput = DescribeAccountModificationsRequest;
export declare type DescribeAccountModificationsCommandOutput = DescribeAccountModificationsResult & __MetadataBearer;
export declare class DescribeAccountModificationsCommand extends $Command<DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeAccountModificationsCommandInput;
    constructor(input: DescribeAccountModificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
