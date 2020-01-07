import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DisassociateRoleFromGroupRequest, DisassociateRoleFromGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateRoleFromGroupCommandInput = DisassociateRoleFromGroupRequest;
export declare type DisassociateRoleFromGroupCommandOutput = DisassociateRoleFromGroupResponse & __MetadataBearer;
export declare class DisassociateRoleFromGroupCommand extends $Command<DisassociateRoleFromGroupCommandInput, DisassociateRoleFromGroupCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DisassociateRoleFromGroupCommandInput;
    constructor(input: DisassociateRoleFromGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateRoleFromGroupCommandInput, DisassociateRoleFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
