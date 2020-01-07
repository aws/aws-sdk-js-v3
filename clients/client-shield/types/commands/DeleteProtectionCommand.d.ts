import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DeleteProtectionRequest, DeleteProtectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProtectionCommandInput = DeleteProtectionRequest;
export declare type DeleteProtectionCommandOutput = DeleteProtectionResponse & __MetadataBearer;
export declare class DeleteProtectionCommand extends $Command<DeleteProtectionCommandInput, DeleteProtectionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DeleteProtectionCommandInput;
    constructor(input: DeleteProtectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProtectionCommandInput, DeleteProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
