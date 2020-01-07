import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeCrossAccountAccessRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCrossAccountAccessRoleCommandInput = {};
export declare type DescribeCrossAccountAccessRoleCommandOutput = DescribeCrossAccountAccessRoleResponse & __MetadataBearer;
export declare class DescribeCrossAccountAccessRoleCommand extends $Command<DescribeCrossAccountAccessRoleCommandInput, DescribeCrossAccountAccessRoleCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeCrossAccountAccessRoleCommandInput;
    constructor(input: DescribeCrossAccountAccessRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCrossAccountAccessRoleCommandInput, DescribeCrossAccountAccessRoleCommandOutput>;
    private serialize;
    private deserialize;
}
