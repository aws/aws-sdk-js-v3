import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { SetVisibleToAllUsersInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetVisibleToAllUsersCommandInput = SetVisibleToAllUsersInput;
export declare type SetVisibleToAllUsersCommandOutput = __MetadataBearer;
export declare class SetVisibleToAllUsersCommand extends $Command<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput, EMRClientResolvedConfig> {
    readonly input: SetVisibleToAllUsersCommandInput;
    constructor(input: SetVisibleToAllUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput>;
    private serialize;
    private deserialize;
}
