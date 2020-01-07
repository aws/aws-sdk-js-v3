import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAvailableManagementCidrRangesCommandInput = ListAvailableManagementCidrRangesRequest;
export declare type ListAvailableManagementCidrRangesCommandOutput = ListAvailableManagementCidrRangesResult & __MetadataBearer;
export declare class ListAvailableManagementCidrRangesCommand extends $Command<ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ListAvailableManagementCidrRangesCommandInput;
    constructor(input: ListAvailableManagementCidrRangesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput>;
    private serialize;
    private deserialize;
}
