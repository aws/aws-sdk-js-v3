import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteInstallationMediaMessage, InstallationMedia } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInstallationMediaCommandInput = DeleteInstallationMediaMessage;
export declare type DeleteInstallationMediaCommandOutput = InstallationMedia & __MetadataBearer;
export declare class DeleteInstallationMediaCommand extends $Command<DeleteInstallationMediaCommandInput, DeleteInstallationMediaCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteInstallationMediaCommandInput;
    constructor(input: DeleteInstallationMediaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstallationMediaCommandInput, DeleteInstallationMediaCommandOutput>;
    private serialize;
    private deserialize;
}
