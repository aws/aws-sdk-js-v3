import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { AssociateIpGroupsRequest, AssociateIpGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateIpGroupsCommandInput = AssociateIpGroupsRequest;
export declare type AssociateIpGroupsCommandOutput = AssociateIpGroupsResult & __MetadataBearer;
export declare class AssociateIpGroupsCommand extends $Command<AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: AssociateIpGroupsCommandInput;
    constructor(input: AssociateIpGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
