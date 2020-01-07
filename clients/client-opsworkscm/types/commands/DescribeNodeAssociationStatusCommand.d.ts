import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DescribeNodeAssociationStatusRequest, DescribeNodeAssociationStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNodeAssociationStatusCommandInput = DescribeNodeAssociationStatusRequest;
export declare type DescribeNodeAssociationStatusCommandOutput = DescribeNodeAssociationStatusResponse & __MetadataBearer;
export declare class DescribeNodeAssociationStatusCommand extends $Command<DescribeNodeAssociationStatusCommandInput, DescribeNodeAssociationStatusCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DescribeNodeAssociationStatusCommandInput;
    constructor(input: DescribeNodeAssociationStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNodeAssociationStatusCommandInput, DescribeNodeAssociationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
