import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifySelfservicePermissionsCommandInput = ModifySelfservicePermissionsRequest;
export declare type ModifySelfservicePermissionsCommandOutput = ModifySelfservicePermissionsResult & __MetadataBearer;
export declare class ModifySelfservicePermissionsCommand extends $Command<ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifySelfservicePermissionsCommandInput;
    constructor(input: ModifySelfservicePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
