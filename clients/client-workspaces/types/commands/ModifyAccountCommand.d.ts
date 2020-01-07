import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyAccountRequest, ModifyAccountResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyAccountCommandInput = ModifyAccountRequest;
export declare type ModifyAccountCommandOutput = ModifyAccountResult & __MetadataBearer;
export declare class ModifyAccountCommand extends $Command<ModifyAccountCommandInput, ModifyAccountCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyAccountCommandInput;
    constructor(input: ModifyAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyAccountCommandInput, ModifyAccountCommandOutput>;
    private serialize;
    private deserialize;
}
