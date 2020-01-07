import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisassociateDRTRoleRequest, DisassociateDRTRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateDRTRoleCommandInput = DisassociateDRTRoleRequest;
export declare type DisassociateDRTRoleCommandOutput = DisassociateDRTRoleResponse & __MetadataBearer;
export declare class DisassociateDRTRoleCommand extends $Command<DisassociateDRTRoleCommandInput, DisassociateDRTRoleCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DisassociateDRTRoleCommandInput;
    constructor(input: DisassociateDRTRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDRTRoleCommandInput, DisassociateDRTRoleCommandOutput>;
    private serialize;
    private deserialize;
}
