import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeCreateAccountStatusRequest, DescribeCreateAccountStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCreateAccountStatusCommandInput = DescribeCreateAccountStatusRequest;
export declare type DescribeCreateAccountStatusCommandOutput = DescribeCreateAccountStatusResponse & __MetadataBearer;
export declare class DescribeCreateAccountStatusCommand extends $Command<DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeCreateAccountStatusCommandInput;
    constructor(input: DescribeCreateAccountStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput>;
    private serialize;
    private deserialize;
}
