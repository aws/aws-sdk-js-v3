import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { AssociateDRTRoleRequest, AssociateDRTRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDRTRoleCommandInput = AssociateDRTRoleRequest;
export declare type AssociateDRTRoleCommandOutput = AssociateDRTRoleResponse & __MetadataBearer;
export declare class AssociateDRTRoleCommand extends $Command<AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput, ShieldClientResolvedConfig> {
    readonly input: AssociateDRTRoleCommandInput;
    constructor(input: AssociateDRTRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput>;
    private serialize;
    private deserialize;
}
