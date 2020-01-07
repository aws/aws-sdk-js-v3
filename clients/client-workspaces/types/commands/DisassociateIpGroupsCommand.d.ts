import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DisassociateIpGroupsRequest, DisassociateIpGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateIpGroupsCommandInput = DisassociateIpGroupsRequest;
export declare type DisassociateIpGroupsCommandOutput = DisassociateIpGroupsResult & __MetadataBearer;
export declare class DisassociateIpGroupsCommand extends $Command<DisassociateIpGroupsCommandInput, DisassociateIpGroupsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DisassociateIpGroupsCommandInput;
    constructor(input: DisassociateIpGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateIpGroupsCommandInput, DisassociateIpGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
