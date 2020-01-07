import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateRoleToGroupCommandInput = AssociateRoleToGroupRequest;
export declare type AssociateRoleToGroupCommandOutput = AssociateRoleToGroupResponse & __MetadataBearer;
export declare class AssociateRoleToGroupCommand extends $Command<AssociateRoleToGroupCommandInput, AssociateRoleToGroupCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: AssociateRoleToGroupCommandInput;
    constructor(input: AssociateRoleToGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateRoleToGroupCommandInput, AssociateRoleToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
