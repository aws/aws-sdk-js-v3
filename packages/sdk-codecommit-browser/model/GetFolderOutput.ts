import {_FolderList} from './_FolderList';
import {_FileList} from './_FileList';
import {_SymbolicLinkList} from './_SymbolicLinkList';
import {_SubModuleList} from './_SubModuleList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetFolderOutput: _Structure_ = {
    type: 'structure',
    required: [
        'commitId',
        'folderPath',
    ],
    members: {
        commitId: {
            shape: {
                type: 'string',
            },
        },
        folderPath: {
            shape: {
                type: 'string',
            },
        },
        treeId: {
            shape: {
                type: 'string',
            },
        },
        subFolders: {
            shape: _FolderList,
        },
        files: {
            shape: _FileList,
        },
        symbolicLinks: {
            shape: _SymbolicLinkList,
        },
        subModules: {
            shape: _SubModuleList,
        },
    },
};