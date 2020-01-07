import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { MoveAccountRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MoveAccountCommandInput = MoveAccountRequest;
export declare type MoveAccountCommandOutput = __MetadataBearer;
export declare class MoveAccountCommand extends $Command<MoveAccountCommandInput, MoveAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: MoveAccountCommandInput;
    constructor(input: MoveAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MoveAccountCommandInput, MoveAccountCommandOutput>;
    private serialize;
    private deserialize;
}
